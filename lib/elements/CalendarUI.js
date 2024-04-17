import styled from 'styled-components';
import Color from 'color';
import Paper from '@material-ui/core/Paper';
import { media } from '../styles/media-templates';

const Container = styled.div`
  user-select: none;
  width: 100%;
  *,
  :after,
  :before {
    box-sizing: content-box;
  }
`;

const Content = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 300px;
  width: 100vw;
  ${media.mobile`width: 100vw;`} ${(props) =>
    props.position === 'fullscreen'
      ? `
  width: 100vw;
  height: 100vh;
  font-size: 1.2em;
  `
      : `
    max-width: ${
      ['startBottomLeft', 'startBottomRight', 'startTopLeft', 'startTopRight', 'center'].includes(
        props.position
      )
        ? '340px'
        : '768px'
    };
  `} transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

const CalendarHeader = styled.div`
  min-height: 34px;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  color: white;
  background: ${(props) => props.theme.header.backgroundColor};
  svg:hover {
    fill: #ffc107;
  }
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

const Header = styled(CalendarHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TwelveGridItem = styled.div`
  flex-grow: 1;
  width: 25%;
  align-items: center;
  justify-content: center;
  display: flex;
  text-transform: capitalize;
  &:hover {
    ${(props) => `color: ${props.theme.body.highlightColor};`};
  }
`;

const TwelveGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

const MonthSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MonthLabel = styled.div`
  min-width: 83px;
  text-align: center;
  &:active {
    ${(props) => `color: ${props.theme.body.highlightColor};`};
  }
`;

const YearSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const YearLabel = styled.div`
  min-width: 40px;
  text-align: center;
  &:active {
    ${(props) => `color: ${props.theme.body.highlightColor};`};
  }
`;

const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-grow: 1;
`;

const WeekDays = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.header.backgroundColor};
  color: white;
  height: 26px;
`;

const StyledGridItem = styled.div`
  flex-grow: 1;
  width: calc(100% * (1 / 7) - 1px - 0.5rem);
  text-align: center;
  border-right: none;
  border-bottom: 1px solid #fff;
  padding: 0.25rem;
  ${WeekDays} & {
    border: none;
    padding: 0.2em;
    font-size: 0.8em;
    :nth-child(-n + 7) {
      border-top: none;
    }
  }
  :nth-child(-n + 7) {
    border-top: '1px solid #ddd';
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
`;

const GridItemLink = styled(StyledGridItem).attrs(() => ({ as: 'a' }));
const DayGridItem = styled(GridItemLink)`
  ${(props) =>
    props.prevMonth || props.nextMonth
      ? `color: ${Color(props.theme.body.primaryColor).alpha(0.8).string()};`
      : `color: ${props.theme.body.primaryColor};`} text-decoration: none !important;
  cursor: pointer;
  &:hover {
    ${(props) =>
      props.active
        ? ''
        : `color: ${props.theme.body.highlightColor}; border-color: ${props.theme.body.highlightColor}`};
  }
  ${(props) =>
    props.active
      ? `
        font-weight: 700;
        border-color: ${props.theme.body.primaryColor};
        `
      : ``} &[disabled] {
    color: ${(props) => Color(props.theme.body.primaryColor).alpha(0.5).string()} !important;
    pointer-events: none;
    cursor: not-allowed;
  }
  position: relative;
  ${(props) =>
    props.marker
      ? `
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      padding: 0;
      border-color: transparent;
      border-style: solid;
    }

    &::after {
      border-width: 0.5em;
      border-right-color: ${props.theme.body.highlightColor};
      border-top-color: ${props.theme.body.highlightColor};
    }`
      : ``};
`;
const VIEWS = {
  TIME_VIEW: 'TIME_VIEW',
  DAY_VIEW: 'DAY_VIEW',
  MONTH_VIEW: 'MONTH_VIEW',
  YEAR_VIEW: 'YEAR_VIEW',
};

export {
  Container,
  Content,
  CalendarHeader,
  Header,
  TwelveGrid,
  TwelveGridItem,
  MonthSwitch,
  MonthLabel,
  YearSwitch,
  YearLabel,
  Days,
  WeekDays,
  StyledGridItem,
  DayGridItem,
  GridItemLink,
  VIEWS,
};
