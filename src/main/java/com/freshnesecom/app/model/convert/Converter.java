package com.freshnesecom.app.model.convert;

public interface Converter<Obj1, Obj2> {
	Obj2 fromTo(Obj1 obj);
}
