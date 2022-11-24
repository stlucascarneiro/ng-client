import { Breakpoints } from 'utils/breakpoints'

export default `
    h1 {
        font-size: 32px;
        font-weight: 700;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 24px;
        }
    }
    h2 {
        font-size: 22px;
        font-weight: 500;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 18px;
        }
    }
    h3 {
        font-size: 16px;
        font-weight: 500;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 15px;
        }
    }
    h4 {
        font-size: 14px;
        font-weight: 600;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px;
        }
    }
    h5 {
        font-size: 14px;
        font-weight: 600;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px;
        }
    }
    a, button {
        font-size: 14px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px;
        }
    }
    label {
        font-size: 14px;
        font-weight: 400;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px;
        }
    }
    p, li {
        font-size: 14px;
        font-weight: 300;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 13px;
        }
    }
    small {
        font-size: 13px;
        font-weight: 300;

        @media ${Breakpoints.getBelow('tablet')} {
            font-size: 12px;
        }
    }
`
