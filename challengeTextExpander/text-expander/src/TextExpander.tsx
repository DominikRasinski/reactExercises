import { useState } from 'react';

interface TextExpanderProps {
  collapsedNumWords?: number;
  expandButtonText?: string;
  expanded?: boolean;
  collapseButtonText?: string;
  buttonColor?: string;
  className?: string;
  children: React.ReactNode;
}

export const TextExpander = (props: TextExpanderProps) => {
  const {
    className,
    collapseButtonText = 'Show more',
    expandButtonText = 'Show less',
    buttonColor,
  } = props;
  const [expanded, setExpanded] = useState(props.expanded ?? false);

  let collapsedText,
    expandedText = '';

  const words = props.children?.toString().split(' ');
  const collapsedNumWords = props.collapsedNumWords ?? 10;
  if (words) {
    collapsedText = words.slice(0, collapsedNumWords).join(' ') + '...';
    expandedText = words.join(' ');
  }

  const buttonStyle = {
    background: 'none',
    border: 'none',
    marginLeft: '0.5rem',
    fontSize: '18px',
    color: buttonColor ?? '#007bff',
    cursor: 'pointer',
  };

  return (
    <div className={className ?? ''}>
      <div>
        {expanded ? expandedText : collapsedText}
        <button
          style={buttonStyle ?? ''}
          onClick={() => setExpanded((e) => !e)}>
          {expanded ? expandButtonText : collapseButtonText}
        </button>
      </div>
    </div>
  );
};
