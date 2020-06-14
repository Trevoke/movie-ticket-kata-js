# Movie Ticket Kata

## What Are We Building?

Write a program that calculates purchase price for movie tickets *using any language you like*. It should not be a full-blown web app; it can be a simple class or collection of methods invokable by your test suite. We'll provide you with some requirements, test-cases, and even a sample interface - all you have to do is give us some software.

## Base Admission Rate 

The Base Admission Rate cover movies to be viewed on a regular weekday (see "Special Movie Day" below), in 2D, with a length of <= 120 minutes, viewed from the main seating area (there is also a balcony seating area, which is much fancier).

- General Admission, $11.00/ticket
- Students (where 13 <= age < 64 years of age), $8.00/ticket
- Senior Citizen (65 & older), $6.00/ticket
- Children (under 13), $5.50/ticket
- Group Pricing (if 20 people or more), max of $6.00/ticket (i.e. tickets for 30 children, 2D, Monday showing, 90 minutes, main seating area would cost `30 * 5.50` instead of `30 * 6.00`)

## Rate Modifications

There are some exceptional cases which can cause us to add/subtract from a ticket's price:

- If watching a 3D movie, add $3.00/ticket
- If the movie's duration is greater than 120 minutes, add $1.50/ticket
- On Special Movie Day (Thursday, but does not apply if group-pricing), subtract $2.00/ticket
- On Weekends (Saturday and Sunday), add $1.50/ticket
- If seated in the balcony area, add $2.00/ticket

## Example Calculation

```
4 tickets for 35 year-olds (General Admission), 3D, 90 minute duration, Thursday, balcony seating == $56.00

base price
  * general admission:  4 x $11.00 == $44.00
 
modifications
  * 3D movie:           4 x  3.00  ==  12.00
  * balcony:            4 x  2.00  ==   8.00
  * Special Movie Day:  4 x -2.00  ==  -8.00
                                      ------
                                      $56.00
```
         
## Additional Assumptions

- Movie tickets must be purchased and consumed on the same day
- All of the movie tickets for a single purchase must be for the same showing
- All of the moviegoers for a single purchase will be seated in the same area

## Scoring

- quantitative: 1 point per test case completed (max 16)
- qualitative: consistent, clean, idionmatic code

## A Sample Interface

In Javascript, we might write something like the following. You don't have to use this, as a guide, but you can.

```js
class MovieTicketPurchase {
  constructor(movieDurationInMinutes, DayOfWeek, IsBalconySeats, is3d) { 
  
  }

  addTicket(viewerAge, isViewerStudent) {
  
  }

  finish() {
  
  }
}
```

...and use it like so:

```js
const movieTicketPurchase = new MovieTicketPurchase(90, 'tuesday', false, false)
movieTicketPurchase.addTicket(35, false)
movieTicketPurchase.addTicket(35, false)
movieTicketPurchase.addTicket(35, false)
movieTicketPurchase.addTicket(35, false)
movieTicketPurchase.finish() // 44.00
```

## Test Cases

- 0 tickets == $0.00
- 4 x 35 year-olds, 2D, 90 minute duration, Tuesday, normal seating == $44.00
- 4 x 35 year-olds, 3D, 90 minute duration, Tuesday, normal seating == $56.00
- 21 x 35 year-old, 2D, 90 minute duration, Tuesday, normal seating == $126.00
- 4 x 35 year-olds, 3D, 90 minute duration, Tuesday, balcony seating == $64.00
- 4 x 35 year-olds, 3D, 90 minute duration, Thursday, balcony seating == $56.00
- 4 x 35 year-olds, 2D, 240 minute duration, Monday, normal seating == $50.00
- 4 x 35 year-olds, 3D, 90 minute duration, Saturday, balcony seating == $70.00
- 4 x 9 year-olds, 2D, 90 minute duration, Monday, normal seating == $22.00
- 4 x 67 year-olds, 2D, 90 minute duration, Monday, normal seating == $24.00
- 4 x 14 year-old students, 2D, 90 minute duration, Monday, normal seating == $32.00
- 1 x each type (student, regular, senior, child), 2D, 90 minute duration, Monday, normal seating == $30.50
- 21 x 9 year-olds, 2D, 90 minute duration, Monday, normal seating == $115.50
- 21 x 35 year-old, 2D, 90 minute duration, Thursday, normal seating == $126.00
- 10 x 14 year-old students + 11 x 9 year-olds, 2D, 90 minute duration, Monday, normal seating == $120.50
- 7 x each type (student, regular, senior, child), 3D, 240 minute duration, Thursday, balcony seating == $346.50

## Don't Worry!

- Get as far as you can in 60 minutes
- Feel free to ask questions
- You can use the internet to look up programming-related things
