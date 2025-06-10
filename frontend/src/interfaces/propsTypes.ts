export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    variant?: 'primary' | 'secondary',
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &{
    children: React.ReactNode,
    error : string
}