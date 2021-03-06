import * as React from "react";
import styled from "styled-components";

import { P } from "./Typography";
import { ColorFantasy, ColorTuna, ScreenMd, ScreenXs } from "../components/Variables";
import { IsMobile } from "./Function";

import Location from "../images/icon-location.svg";
import Info from "../images/icon-info.svg";
import Office from "../images/icon-office.svg";
import Checklist from "../images/icon-checklist.svg";

const InfoStyle = styled.div`
	background: ${ColorFantasy};
	border-radius: 16px;
	padding: 64px;
	@media (max-width: ${ScreenMd}) {
		margin-top: 36px;
		padding: 24px 20px;
	}
	@media (max-width: ${ScreenXs}) {
		border-radius: 0;
	}
	@media (max-width: ${ScreenXs}) {
		padding: 24px 10px 36px 10px;
	}
	h5 {
		font-size: 24px;
		line-height: 36px;
		font-weight: 700;
		margin-top: 35px;
		&:first-child {
			margin-top: 0;
		}
		img {
			margin-right: 10px;
		}
	}
	> p {
		margin-top: 16px;
	}
	svg {
		margin: 12px auto 0;
		color: ${ColorTuna};
		display: block;
		&.mobile {
			display: none;
		}
	}
`;
const Our = styled.span`
	background: #fff;
	border-radius: 12px;
	display: flex;
	font-size: 16px;
	line-height: 24px;
	padding: 8px 10px;
	width: 100%;
	align-items: flex-start;
	justify-content: flex-start;
	margin-top: 16px;
	img {
		margin-right: 10px;
		margin-top: 2px;
	}
`;
const Chart = styled.div`
	background: white;
	border-radius: 12px;
	padding: 24px;
	position: relative;
	text-align: center;
	margin-top: 12px;
	p {
		color: ${ColorTuna};
	}
	&:before {
		background: ${ColorTuna};
		color: white;
		border-radius: 8px;
		bottom: 6px;
		content: "100%";
		font-size: 16px;
		line-height: 24px;
		padding: 0 4px;
		position: absolute;
		right: 6px;
	}
`;
const ChartSingle = styled(Chart)`
	background: ${ColorTuna};
	margin-top: 36px;
	p {
		color: white;
	}
	&:before {
		background: white;
		color: ${ColorTuna};
	}
`;
const ChartFlex = styled.div`
	display: flex;
	margin-top: 12px;
	@media (max-width: ${ScreenXs}) {
		display: block;
	}
	> div {
		width: 50%;
		@media (max-width: ${ScreenXs}) {
			width: 100%;
		}
		&:first-child {
			margin-right: 36px;
			@media (max-width: ${ScreenXs}) {
				margin-right:0;
				margin-bottom:16px;
		}
	}
	span {
		font-size: 16px;
		line-height: 24px;
		margin-top: 16px;
		display: block;
	}
`;
const ChartOut = styled.div`
	background: #fff;
	padding: 24px;
	width: 100%;
	border-radius: 12px;
	p {
		text-align: center;
	}
`;

const Information = () => {
	const isMobile = IsMobile();
	return (
		<InfoStyle>
			<h5>
				<img src={Location} alt="Country of Incorporation" width="18" height="23" />
				Country of Incorporation
			</h5>
			<P>
				England and Wales <br />
				Company number 10544700
			</P>
			<Our>
				<img src={Info} alt="Our main country of operation is the United Kingdom." width="20" height="20" />
				Our main country of operation is the United Kingdom.
			</Our>
			<h5>
				<img src={Office} alt="Registered office" width="24" height="24" />
				Registered office
			</h5>
			<P>Brooklands Business Park, Wellington Way, Weybridge, Surrey, England, KT13 0TT, United Kingdom</P>
			<h5>
				<img src={Checklist} alt="AIM Rule 26 Checklist" width="20" height="24" /> AIM Rule 26 Checklist
			</h5>
			<P>Group Structure</P>
			<P>Fiinu Group Plc is the group holding company</P>
			<ChartSingle>
				<P>
					Fiinu Group Plc
					<br />
					<b>Co. No. 10544700</b>
				</P>
			</ChartSingle>
			{isMobile ? (
				<svg width="13" height="40" viewBox="0 0 13 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.5 39.8537L12.2735 29.8537H0.726497L6.5 39.8537ZM5.5 0V30.8537H7.5V0H5.5Z" fill="#333D47" />
				</svg>
			) : (
				<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 22L11.7735 12H0.226497L6 22ZM5 0V13H7V0H5Z" fill="#333D47" />
				</svg>
			)}
			<Chart>
				<P>
					Fiinu Holdings Ltd <br />
					<b>Co. No. 10544700</b>
				</P>
			</Chart>
			{isMobile ? (
				<svg className="desktop" width="326" height="86" viewBox="0 0 326 86" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 86L11.7735 76H0.226497L6 86ZM162 0V30.1463H164V0H162ZM147 45.1463H22V47.1463H147V45.1463ZM5 62.1463V77H7V62.1463H5ZM22 45.1463C12.6112 45.1463 5 52.7575 5 62.1463H7C7 53.8621 13.7157 47.1463 22 47.1463V45.1463ZM162 30.1463C162 38.4306 155.284 45.1463 147 45.1463V47.1463C156.389 47.1463 164 39.5352 164 30.1463H162Z" fill="currentColor" />
					<path d="M320 86L314.226 76H325.774L320 86ZM164 0V30.1463H162V0H164ZM179 45.1463H304V47.1463H179V45.1463ZM321 62.1463V77H319V62.1463H321ZM304 45.1463C313.389 45.1463 321 52.7575 321 62.1463H319C319 53.8621 312.284 47.1463 304 47.1463V45.1463ZM164 30.1463C164 38.4306 170.716 45.1463 179 45.1463V47.1463C169.611 47.1463 162 39.5352 162 30.1463H164Z" fill="currentColor" />
				</svg>
			) : (
				<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 22L11.7735 12H0.226497L6 22ZM5 0V13H7V0H5Z" fill="#333D47" />
				</svg>
			)}

			<ChartFlex>
				<div>
					<ChartOut>
						<P>
							Fiinu Services Ltd
							<br />
							<b>Co. No. 12973742</b>
						</P>
					</ChartOut>
					<span>Fiinu Services Ltd will provide financial technology and alternative data solutions to the market.</span>
				</div>
				<div>
					<ChartOut>
						<P>
							Fiinu 2 Ltd <br />
							<b>Co. No. 12973786</b>
						</P>
					</ChartOut>
					<span>Fiinu 2 Ltd is the applicant firm which will be renamed as Fiinu Bank Ltd once its authorised by the PRA/FCA.</span>
				</div>
			</ChartFlex>
		</InfoStyle>
	);
};

export default Information;
