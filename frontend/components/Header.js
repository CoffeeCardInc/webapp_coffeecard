import headerStyles from '../styles/Header.module.css'

const Header = ({ title }) => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>{title}</span>
      </h1>
    </div>
  )
}
Header.defaultProps = {
  title: 'Welcome to CoffeeCard',
}
export default Header
