import css from './Statistics.module.css';
// import PropTypes from 'prop-types';

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
 
  {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.stats__list}>
  {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.stats}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
 </ul>
</section>
    );

};

// Statistics.PropTypes = {
//  label: propTypes.string.isRequired,
//  percentage: propTypes.number.isRequired,
// }
