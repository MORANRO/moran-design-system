import styles from './Badge.module.css'

type BadgeVariant = 'default' | 'accent' | 'purple'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[variant]}`}>{label}</span>
}
