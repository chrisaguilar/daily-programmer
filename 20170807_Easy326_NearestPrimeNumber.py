"""A prime number is any integer greater than 1 which can only be evenly divided
by 1 or itself. For this challenge, you will output two numbers: the nearest
prime below the input, and the nearest prime above it.
Input Description

The input will be a number on each line, called n.
Output Description

The format of the output will be:
p1 < n < p2
where p1 is the smaller prime, p2 is the larger prime and n is the input.
If n already is a prime, the output will be:
n is prime.
Challenge Input

270
541
993
649
Challenge Output

269 < 270 < 271
541 is prime.
991 < 993 < 997
647 < 649 < 653
Bonus

Write the program to work for numbers with big gaps to the nearest primes.
This requires a clever solution and cannot be efficiently bruteforced.

2010741
1425172824437700148

Credit
This challenge was suggested by user /u/tulanir , many thanks! If you have an
idea for a challenge please share it on /r/dailyprogrammer_ideas and there's a
good chance we'll use it.
"""


def is_prime(n):
    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True


def easy_326(x):
    if is_prime(x):
        return f'{x} is prime.'

    next_below = x - 1
    next_above = x + 1

    while not is_prime(next_below) or not is_prime(next_above):
        if not is_prime(next_below):
            next_below -= 1
        if not is_prime(next_above):
            next_above += 1

    return f'{next_below} < {x} < {next_above}'


def main():
    test_cases = (541, 270, 993, 649, 2010741)

    for case in test_cases:
        print(easy_326(case))


if __name__ == '__main__':
    main()
