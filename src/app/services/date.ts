export function getExperienceYearsAndMonths(dateSince: string) {
    const startDate = new Date(dateSince)
    const endDate = new Date(); // Текущая дата
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    // Если количество месяцев отрицательное, уменьшаем количество лет
    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years}${((years >= 1) && (years as number <= 4)) ? 'г' : 'л'} ${months != 0 ? `${months}мес` : ''}`
}
