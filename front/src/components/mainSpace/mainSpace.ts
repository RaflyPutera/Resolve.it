import styled from 'styled-components'

export const ViewerMain = styled('div')`
    font-family: 'DM Sans', sans-serif;
    align-items:center;
    justify-content:center;
    height:100%;
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
`
export const ViewerNavi =styled('div')`
    grid-area: 1 / 2 / 2 / 3;
    background-color:#363434;
    height:100%;
    display:flex;
    box-shadow: 2px 3px 15px 4px rgba(0, 0, 0, 0.07);
`

// export const Frame = styled('div')`
//     display:block;
//     // overflow-y:hidden;
//     position: relative;
//     // padding: 4px 0px 0px 0px;
//     // text-overflow: ellipsis;
//     // white-space: nowrap;
//     // overflow-x: hidden;
//     vertical-align: middle;
//     // color: #24292e;
//     // fill: #24292e;
//     `

// export const Title = styled('span')`
//     vertical-align: middle;
//     `

// export const TitleButton=styled.button<{active:boolean}>`
//     vertical-align: middle;
//     margin-left:-2px;
//     font-family: 'Outfit', sans-serif;
//     font-size:20px;
//     background-color: transparent;
//     border-color:transparent;
//     cursor:pointer;
//     // color: #24292e;
//     color: ${props=>props.active?'#3640ad':'#24292e'};

//     &:hover{
//         color: #3640ad;
//     }
//     `

// export const Content = styled(animated.div)`
//     will-change: transform, opacity, height;
//     margin-left: 6px;
//     padding: 0px 0px 0px 14px;
//     border-left: 1px dashed rgba(81, 27, 130, 0.4);
//     overflow: hidden;
//     `

// export const toggle = {
//     width: '1em',
//     height: '1em',
//     marginRight: 10,
//     cursor: 'pointer',
//     verticalAlign: 'middle',
// }
