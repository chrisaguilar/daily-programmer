import re

packets = []

while True:
    packet = input()
    if packet == '': break
    packets.append(re.split('\s{2,}', packet)) 

packets.sort(key=lambda p: (int(p[0]), int(p[1])))

for packet in packets:
    print('{:4}  {:4}  {:4}  {}'.format(*packet))
