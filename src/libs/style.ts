// enum 처리하기

export const SortingWordChange = (property: string) => {
    switch (property) {
        case "left":
            return "flex-start";
        case "right":
            return "flex-end";
    }
};
