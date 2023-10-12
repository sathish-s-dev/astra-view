interface SubheadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
}

interface ParaProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
	className?: string;
}

interface CardProps {
	title?: string;
	body?: string;
}

interface CardSectionProps {
	heading?: string;
}
