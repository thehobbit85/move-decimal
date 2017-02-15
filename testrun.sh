#!/bin/bash
touch testResult.txt

now=`date +%Y-%m-%d.%H:%M:%S`
msg="-----Testing time: $now-----"
echo $msg >> testResult.txt
msg="-----Number of iterations is: $ITERATIONS-----"
echo $msg >> testResult.txt
msg="-----Number of runs is: $RUNS-----"
echo $msg >> testResult.txt
for i in `seq 1 $RUNS`;
do
  msg="--------------Test number $i---------------"
  echo $msg >> testResult.txt
  mocha | grep Testing >> testResult.txt
done

echo "-------------Test Batch Ended--------------" >> testResult.txt