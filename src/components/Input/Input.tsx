import styles from './Input.module.css'

interface InputProps {
  label: string
  placeholder?: string
  supportingText?: string
  value?: string
  error?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  label,
  placeholder,
  supportingText,
  value,
  error = false,
  disabled = false,
  onChange,
}: InputProps) {
  return (
    <div className={`${styles.wrapper} ${error ? styles.error : ''}`}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {supportingText && (
        <span className={`${styles.supportingText} ${disabled ? styles.dimmed : ''}`}>
          {supportingText}
        </span>
      )}
    </div>
  )
}
