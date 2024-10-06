import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';

const Formula = /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/
// {
//   to: 'UAH',
//     from: 'USD',
//       amount: 15
// }

export const ExchangeForm = () => {
  const hundleSubmit = (ev) => {
    ev.preventDefault();
    const request = ev.target.elements.request.value;
    // console.log(request);
    const isValid = Formula.test(request);
    // console.log(isValid);
    if (!isValid) {
      return
    }
    const [amount, from, , to] = request.split(' ');
    const params = { amount, from, to }
    console.log(params);

    ev.target.reset()
  }
  return (
    <form onSubmit={hundleSubmit} className={styles.form}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input name="request" title="Request format 15 USD in UAH" className={styles.input} />
    </form>
  );
};
