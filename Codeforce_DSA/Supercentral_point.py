l=[]

n=int(input())
for i in range(n):
	l.append(list(map(int,input().split())))

l.sort()
# print(l)
count=0

for i in range(1,n-1) :
	rn,tn,bn,ln=0,0,0,0
	
	for j in range(0,n):
		if l[i][0]==l[j][0] :
			# print("x")
			if l[i][1]<l[j][1]:
				# print("tn")

				tn+=1
			if l[i][1]>l[j][1]:
				# print("bn")
				bn+=1
		if l[i][1]==l[j][1] :
			if l[i][0]<l[j][0]:
				rn+=1
			if l[i][0]>l[j][0]:
				ln+=1
	a=[rn,ln,tn,bn]
	if 0 not in a:
		count+=1

print(count)
