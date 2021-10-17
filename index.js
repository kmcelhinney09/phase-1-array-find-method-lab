function superbowlWin(recordsArr) {
    const result = recordsArr.find(item => item.result === "W")
    if (result === undefined) {
        return undefined;
    } else {
        return result.year;
    }
}

