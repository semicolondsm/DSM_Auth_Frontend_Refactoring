import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SortingWordChange } from "@/libs/style";

const sizes = [
    {
        height: "500px",
    },
    {
        height: "600px",
    },
    {
        height: "700px",
    },
];

const Sorting = styled.div<any>`
    align-items: ${(props) => SortingWordChange(props.alignItems)};
    justify-content: ${(props) => SortingWordChange(props.justifyContent)};
`;

export const Section = styled.section<{ size: number }>`
    width: 100%;
    height: ${(props) => sizes[props.size].height};
    position: relative;
`;

export const FlexBox = styled(Sorting)`
    width: 100%;
    height: 100%;
    display: flex;
    ${(props) =>
        props.direction === "R"
            ? css`
                  flex-direction: row;
              `
            : props.direction === "C" &&
              css`
                  flex-direction: column;
              `}
`;
