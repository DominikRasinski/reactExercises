interface ServiceProps {
  onSelect: (value: any) => void;
}

export const Service = (props: ServiceProps) => {
  const { onSelect } = props;
  return (
    <div>
      <p style={{ display: 'inline-block' }}>How did you like the service?</p>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value='0'>It was bad (0%)</option>
        <option value='5'>It was ok (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='10'>It was amazing (20%)</option>
      </select>
    </div>
  );
};
