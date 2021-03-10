import styled, {css} from "styled-components";
import {device} from "@utils/responsiveBreakpoints";

interface StyleProps {
    center?: boolean
}

const center = css`
    position: relative;
    top: 50vh;
    transform: translateY(-50%);
`

export const StyledResponsiveContainer = styled.div<StyleProps>`
    margin: 0 auto;
    width: 100%;
    ${props => props.center && center}
    
    @media ${device.tabletUp} {
        width: 700px;
    }
`
