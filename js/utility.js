const stringify = (date) => {
    const options = {day: 'numeric', month: 'short', year: 'numeric',};
    const newDate = !date ? "undifined" :
                    new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
    return newDate;
}