import React from "react";

interface NavProps {
    categories: string[],
    handler: (category: string) => void
}

export function Navigation({categories, handler}: NavProps) {
    return (
        <nav className="flex justifyaround px2 bggray400 h[8vh] itemscenter">
            <h4 className="fontbold text2xl">FakeStoreApi</h4>
            <div className="textxl underline">
                {categories.map((cat, index) =>
                    <button
                        className="mx2" key={index} onClick={() => handler(cat)}
                    >
                        {cat}
                    </button>
                )}
                <button
                    className="mx2" onClick={() => handler('all')}
                >
                    all
                </button>
            </div>
        </nav>
    )
}