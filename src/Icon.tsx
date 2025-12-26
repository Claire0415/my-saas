import React from 'react';

interface IconProps {
    name: string; // SVG 文件名（不含扩展名）
    size?: number | string; // 图标尺寸
    color?: string; // 颜色（默认 `currentColor`）
    className?: string; // 自定义类名
}

export default function Icon({ name, size = 24, color = 'currentColor', className }: IconProps) {
    return (
        <svg width={size} height={size} fill={color} className={className}>
            <use href={`#icon-${name}`} />
        </svg>
    );
}
