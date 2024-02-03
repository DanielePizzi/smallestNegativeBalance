# Smallest Negative Balance

You are working on a new application for recording debts. This program allows users to create groups that show all records of debts between the group members. Given the group debt records (including the borrower name, lender name, and debt amount), who in the group has the smallest negative balance?

**Notes:**
-   _-10_ is smaller than _-1_
-   If multiple people have the smallest negative balance, return the list in alphabetical order.
-   If nobody has a negative balance, return the string array ["Nobody has a negative balance"].

**Example:**
_n = 6_ 

_debts = ['Alex Blake 2', 'Blake Alex 2', 'Casey Alex 5', 'Blake Casey 7', 'Alex Blake 4', 'Alex Casey 4']_

There are 6 debt records, as shown in the table below:

| **borrower** | **lender** | **amount** |
| ------------ | ---------- | ---------- |
| Alex         | Blake      | 2          |
| Blake        | Alex       | 2          |
| Casey        | Alex       | 5          |
| Blake        | Casey      | 7          |
| Alex         | Blake      | 4          |
| Alex         | Casey      | 4          |

-   The first, fifth, and sixth entries decrease Alex's balance because Alex is a borrower. The second and third entries increase it because Alex is a lender. Alex's balance is (2+5) - (2+4+4) = 7 - 10 = -3.
-   Blake is a lender in the first and fifth entries and a borrower in the second and fourth entries. Thus, Blake's balance is (2+4) - (2+7) = 6 - 9 = -3.
-   Casey is a lender in the fourth and sixth entries, and a borrower in the third entry. Thus, Casey's balance is (7+4) - 5 = 6.

The answer (in alphabetical order) is ["Alex", "Blake"] because both of them have a balance of -3, which is the minimum among all members.

**Function Description:**
Complete the function _smallestNegativeBalance_ in the editor below.

smallestNegativeBalance has the following parameter:
    int _debts[n][3]_: a 2-dimensional array of strings, where _debts[i][0]_ denotes the borrower, _debts[i][1]_ denotes the lender, and _debts[i][2]_ denotes the debt amount

**Returns:**
    string[]: an array of strings denoting an alphabetically ordered list of members with the smallest negative balance, or an array containing the string "Nobody has a negative balance"

**Constraints:**
-   1 ≤ _n_ ≤ 2×105
-   _debts[i][2]_ represents an integer between 1 and 1000 inclusively.
-   1 ≤ length of _debts[i][0]_, length of _debts[i][1]_ ≤ 20
-   The first character of _debts[i][0]_ and _debts[i][1]_ is capital English letter.
-   Every character of _debts[i][j]_ and _debts[i][1]_ except the first one is lowercase English letter.
-   _debts[i][0]_ ≠ _debts[i][1]_.

## Input Format For Custom Testing
The first line contains an integer, _n_, the number of rows in _debts_.

_The second line contains an integer, 3, the number of elements in debts[i]._

Each line _i_ of the _n_ subsequent lines (where _0 ≤ i < n_) contains _3_ space-separated strings: _debts[i][0], debts[i][1], and debts[i][2]_, borrow, lender, amount.

## Sample Case 0
**Sample Input 0:**
```
STDIN             Function
-----             --------
5            →    debts[] size n = 5
3            →    debts[i] size = 3 (always)
Alex Blake 5 →    debts = [['Alex', 'Blake', '5'], ['Blake', 'Alex', '3'], ['Casey', 'Alex', '7'],\ 
Blake Alex 3               ['Casey', 'Alex', '4'], ['Casey', 'Alex', '2']]
Casey Alex 7
Casey Alex 4
Casey Alex 2
```

**Sample Output 0:**
```
Casey
```

**Explanation:**

| **borrower** | **lender** | **amount** |
| ------------ | ---------- | ---------- |
| Alex         | Blake      | 5          |
| Blake        | Alex       | 3          |
| Casey        | Alex       | 7          |
| Casey        | Alex       | 4          |
| Casey        | Alex       | 2          |

-   Alex lends (3+7+4+2) and borrows 5, so the balance is 16 - 5 = 11.
-   Blake lends 5 and borrows 3, so the balance is 5 - 3 = 2.
-   Casey lends 0 and borrows (7+4+2), so the balance is 0 - 13 = -13.

The answer is ["Casey"] because Casey has the smallest (and only) negative balance.

## Sample Case 1
**Sample Input 1:**
```
5
3
Blake Alex 7
Blake Alex 3
Alex Blake 4
Blake Alex 1
Alex Blake 7
```

**Sample Output 1:**
```
Nobody has a negative balance
```

**Explanation:**

| **borrower** | **lender** | **amount** |
| ------------ | ---------- | ---------- |
| Blake        | Alex       | 7          |
| Blake        | Alex       | 3          |
| Alex         | Blake      | 4          |
| Blake        | Alex       | 1          |
| Alex         | Blake      | 7          |

-   Alex lends (7+3+1) and borrows (4+7), so the balance is 11 - 11 = 0.
-   Blake lends (4+7) and borrows (7+3+1), so the balance is 11 - 11 = 0.

Because nobody has a negative balance, the answer is ["Nobody has a negative balance"].

---
