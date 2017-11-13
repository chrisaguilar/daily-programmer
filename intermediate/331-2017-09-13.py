
def main():
    base, exp = map(int, input().split())
    result = sum([int(x) for x in str(base ** exp)])

    return result


if __name__ == '__main__':
    print(main())
    print(main())
    print(main())
