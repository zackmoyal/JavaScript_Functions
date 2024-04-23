console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    if (count < 0)
    {
        for (let i = 1; i >= count; i--)
        {
            if (i % 2 != 0)
            {
                console.log(i);
            }
        }
    }
    else
    {
        for (let i = 1; i <= count; i++)
        {
            if (i % 2 != 0)
            {
                console.log(i);
            }
        }
    }
}

console.log("count = -10");
printOdds(-10);

console.log("count = 10");
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    let aboveSixteen = `Congrats ${userName}! You can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait ${16 - age} year(s) until you can drive.`;

    if (age < 16)
    {
        console.log(belowSixteen);
    }
    else
    {
        console.log(aboveSixteen);
    }
}

console.log("Age: 29");
checkAge("Zack", 29);

console.log("Age: 12");
checkAge("John", 12);

console.log("Age: 16");
checkAge("Frank", 16);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y)
{
    if (x > 0 && y > 0)
    {
        return `(${x}, ${y}) is in Quadrant 1`;
    }
    else if (x < 0 && y > 0)
    {
        return `(${x}, ${y}) is in Quadrant 2`;
    }
    else if (x < 0 && y < 0)
    {
        return `(${x}, ${y}) is in Quadrant 3`;
    }
    else if (x > 0 && y < 0)
    {
        return `(${x}, ${y}) is in Quadrant 4`;
    }
    else if (x == 0 & y != 0)
    {
        return `(${x}, ${y}) is on the y axis`;
    }
    else if (x != 0 && y == 0)
    {
        return `(${x}, ${y}) is on the x axis`;
    }
    else
    {
        return `(${x}, ${y}) is on the Origin`;
    }
}

console.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1, -11));
console.log(checkQuadrant(1, -11));
console.log(checkQuadrant(0, -11));
console.log(checkQuadrant(-11, 0));
console.log(checkQuadrant(0, 0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function checkTriangles(a, b, c)
{
    if (a + b <= c || a + c <= b || b + c <= a)
    {
        return `Sides ${a}, ${b}, ${c} make an invalid triangle`;
    }

    if (a == b && b == c)
    {
        return `Sides ${a}, ${b}, ${c} make an equilateral triangle`;
    }
    else if (a == b || b == c || a == c)
    {
        return `Sides ${a}, ${b}, ${c} make an isosceles triangle`;
    }
    else
    {
        return `Sides ${a}, ${b}, ${c} make a scalene triangle`;
    }
}

console.log(checkTriangles(1, 10, 12));
console.log(checkTriangles(1, 1, 1));
console.log(checkTriangles(2, 2, 3));
console.log(checkTriangles(8, 6, 4));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage)
{
    const totalDays = 30;

    const daysRemaining = totalDays - day;
    const avgDailyUseAllowed = planLimit / totalDays;
    const avgDailyUseCurrent = usage / day;
    const projectedEndOfMonthUsage = avgDailyUseCurrent * totalDays;
    const dataLeft = planLimit - usage;
    const avgDailyUseRemaining = daysRemaining > 0 ? dataLeft / daysRemaining : 0;

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${avgDailyUseAllowed.toFixed(3)} GB/day`);

    if (avgDailyUseCurrent > avgDailyUseAllowed)
    {
        const projectedOveruse = projectedEndOfMonthUsage - planLimit;
        console.log(`You are EXCEEDING your average daily use ${avgDailyUseCurrent.toFixed(2)},`);
        console.log(`continuing this high usage, you'll exceed your data plan by ${projectedOveruse.toFixed(1)} GB.`);
    }
    else if (avgDailyUseCurrent < avgDailyUseAllowed)
    {
        console.log(`You are UNDER your average daily use ${avgDailyUseCurrent.toFixed(2)} GB/day,`);
        console.log(`you can use up to ${avgDailyUseRemaining.toFixed(2)} GB/day for the remaining days.`);
    }
    else
    {
        console.log(`You are RIGHT ON TRACK with your average daily use.`);
    }

    if (dataLeft <= 0)
    {
        console.log('You have run out of your data allocation for this period.');
    }
    else
    {
        console.log(`To stay below your data plan, use no more than ${avgDailyUseRemaining.toFixed(2)} GB/day.`);
    }
}

dataPlanStatus(100, 15, 56);