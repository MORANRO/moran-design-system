import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  label: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
