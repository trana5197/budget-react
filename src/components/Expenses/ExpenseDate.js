import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const { date } = props;

  const locale = navigator.language;

  const year = date.toLocaleString(locale, { year: "numeric" });
  const day = date.toLocaleString(locale, { day: "2-digit" });
  const month = date.toLocaleString(locale, { month: "long" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
