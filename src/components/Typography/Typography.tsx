import styles from './Typography.module.css'

type TypographyVariant =
  | 'displayXl'
  | 'displayLg'
  | 'displayMd'
  | 'bodyLgBold'
  | 'bodyLg'
  | 'bodyMdBold'
  | 'bodyMd'
  | 'bodySm'
  | 'labelLg'
  | 'labelMd'

interface TypographyProps {
  variant: TypographyVariant
  children: React.ReactNode
  as?: React.ElementType
}

export function Typography({ variant, children, as: Tag = 'p' }: TypographyProps) {
  return <Tag className={styles[variant]}>{children}</Tag>
}
