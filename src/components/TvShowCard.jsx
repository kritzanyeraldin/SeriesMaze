const FALLBACK_POSTER =
	'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=2048x2048&w=is&k=20&c=ohMtddTt7BppCvEUNGqJ9FRDyJqAdkzonVQ7KmWbTrg='
const TvShowCard = ({ id, title, poster, rating }) => {
	const img = poster ? poster : FALLBACK_POSTER

	return (
		<article
			key={id}
			className='rounded-xl border border-slate-800 max-w-[220px] overflow-hidden'
		>
			<img
				src={img}
				alt={title ? title : 'No title'}
				className='h-64 w-full object-cover'
			/>
			<div className='p-3'>
				<h3 className='line-clamp-1 text-sm font-semibold'>{title}</h3>
				<p className='mt-1 text-xs'>⭐ {rating ?? '—'}/10</p>
			</div>
		</article>
	)
}

export default TvShowCard
