export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h2 className="text-5xl">Hola Mundo!!! La fecha de hoy es:</h2>
				<h3 className="text-4xl text-center block mx-auto">
					{new Date().toLocaleDateString("es-Es")}
				</h3>
			</main>
			{/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer> */}
		</div>
	);
}
