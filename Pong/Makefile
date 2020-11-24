
build: src
	idris2 --build archaidr-pong.ipkg --codegen javascript
	cp build/exec/pong game/pong.js
	sed -i '$$ d' game/pong.js
	cat game/pong_main >> game/pong.js

clean:
	idris2 --clean archaidr-pong.ipkg

repl:
	idris2 --repl archaidr-pong.ipkg
