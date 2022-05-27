import { Box } from '@chakra-ui/react';
import React from 'react';

interface MaticIconProps {
	height: number;
	width: number;
	color: string;
}

export default function MaticIcon(props: MaticIconProps) {
	const { height, width, color } = props;
	// const fillStyle = { mixBlendMode: 'soft-light' };
	const fillStyle = 'soft-light';
	return (
		<Box verticalAlign="center" color={color}>
			<svg
				width={width}
				height={height}
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<defs>
					<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
						<stop stopColor="#FFF" stopOpacity=".5" offset="0%" />
						<stop stopOpacity=".5" offset="100%" />
					</linearGradient>
					<filter
						x="-5.8%"
						y="-4.2%"
						width="111.7%"
						height="111.7%"
						filterUnits="objectBoundingBox"
						id="a"
					>
						<feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" />
						<feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
						<feComposite
							in="shadowBlurOuter1"
							in2="SourceAlpha"
							operator="out"
							result="shadowBlurOuter1"
						/>
						<feColorMatrix
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
							in="shadowBlurOuter1"
						/>
					</filter>
					<circle id="b" cx="16" cy="15" r="15" />
				</defs>
				<g fill="none" fillRule="evenodd">
					<use fill="#000" filter="url(#a)" xlinkHref="#b" />
					<use fill="#6F41D8" xlinkHref="#b" />
					<use fill="url(#c)" style={{ mixBlendMode: fillStyle }} xlinkHref="#b" />
					<circle
						strokeOpacity=".097"
						stroke="#000"
						strokeLinejoin="miter"
						cx="16"
						cy="15"
						r="14.5"
					/>
					<path
						d="M21.092 11.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V11.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0L6.627 9.034A1.16 1.16 0 006 10.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z"
						fill="#FFF"
						fillRule="nonzero"
					/>
				</g>
			</svg>
		</Box>
	);
}
