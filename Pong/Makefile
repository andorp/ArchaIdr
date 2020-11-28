
build: src
	[ ! -e file ] || rm game/pong.html
	idris2 --build archaidr-pong.ipkg --codegen javascript
	cat game/pong_header build/exec/pong game/pong_footer > game/pong.html
	cp game/pong.html ../docs/pong/pong.html

clean:
	idris2 --clean archaidr-pong.ipkg

repl:
	idris2 --repl archaidr-pong.ipkg
