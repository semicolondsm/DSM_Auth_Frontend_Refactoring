import styled from "@emotion/styled";

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

export const Section = styled.section<{ size: number }>`
    height: ${(props) => sizes[props.size].height};
`;
