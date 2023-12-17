
from pathlib import Path
from mymodule.myfunctions import get_object_attr
from jsmin import jsmin
from cssmin import cssmin
_p=Path("D:\WebSite\GitHub\onaua\onaua.github.io")
def compile_js():
    for e in _p.rglob("*.js"):
        if e.name.endswith(".min.js"):
            continue
        new_js=e.parent/f"{e.stem}.min.js"
        print(new_js)
        with e.open(encoding="utf8") as f1,new_js.open(mode="w",encoding="utf8") as f2:
            f2.write(jsmin(f1.read()).replace("\n",""))
def compile_css():
    for e_css in _p.rglob("*.css"):
        if e_css.name.endswith(".min.css"):
            continue
        new_css=e_css.parent/f"{e_css.stem}.min.css"
        print(new_css)
        with e_css.open(encoding="utf8") as f1,new_css.open(mode="w",encoding="utf8") as f2:
            f2.write(cssmin(f1.read()))
compile_js()


