import './scss/main.scss';
import cn from 'classnames';
import { Color, Size, Variant } from './Typography.types';

export const Typography = ({
    children,
    variant,
    size = 'base',
    bold,
    color,
}: {
    children: React.ReactNode;
    variant?: Variant;
    size?: Size;
    bold?: boolean;
    color?: Color;
}) => {
    const Typography = variant || 'p';

    return (
        <Typography
            data-size={size}
            data-color={color}
            className={cn('typography', bold && 'typography__bold')}
        >
            {children}
        </Typography>
    );
};
