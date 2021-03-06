import * as React from "react";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import { ColorWarmBlue } from "./Variables";

const NextSection = styled.div`
	align-items: center;
	display: flex;
	background: ${({ background }) => background};
	bottom: 0;
	height: 75px;
	left: 0;
	position: absolute;
	width: 100%;
	z-index: 3;
`;
const NextSectionButton = styled.span`
	font-size: 24px;
	justify-content: flex-start;
	cursor: pointer;
	transition: 0.4s;
	line-height: 36px;
	svg {
		margin-left: 15px;
	}
	&:hover {
		color: ${ColorWarmBlue} !important;
	}
`;

const NextContent = ({ nextContent, background, children }) => {
	return (
		<NextSection background={background}>
			<div className="container">
				<NextSectionButton onClick={() => scrollTo(`#${nextContent}`).offsetTop}>
					{children}
					<svg width="26" height="27" viewBox="0 0 26 27" fill="none">
						<path d="M1 1.5L25 25.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
						<path d="M14.7143 25.4999H25V15.2142" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
					</svg>
				</NextSectionButton>
			</div>
		</NextSection>
	);
};

export default NextContent;
