interface BillProps {
  billValue: number;
  onInput: (value: number) => void;
}

export const Bill = (props: BillProps) => {
  const { billValue } = props;
  return (
    <div>
      <p style={{ display: 'inline-block' }}>How much was the bill?</p>
      <input
        type='text'
        value={billValue}
        onChange={(e) => props.onInput(parseInt(e.target.value))}
      />
    </div>
  );
};
