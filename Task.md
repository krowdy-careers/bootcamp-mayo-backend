TAREA sera la siguiente






4 videos de entrada 


ffmpeg - > una esos 4 videos

1er proceso:
unir video 1 y video 4 = video 5
2do proceso unir video 2 y video 3 = vide6
tercer proceso unir = video 5 y video6

final: video 7



// command
ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.mp4


primer archivo

primerproceso.txt
/path/inputvideo1
/path/inputvideo4

--> outputvideo5


segundo archivo

/path/inputvideo2
/path/inputvideo3
--> outputvideo6



tercer archivo
outputvideo5
outputvideo6
--> output7
