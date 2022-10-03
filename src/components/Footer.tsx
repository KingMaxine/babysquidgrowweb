import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className='p-4 sm:p-6 mt-20'>
			<div className='container mx-auto'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<Link to='/' className='flex items-center'>
							<span className='self-center text-4xl font-semibold whitespace-wrap text-white font-squids'>
								The Real Coin Casino
							</span>
						</Link>
					</div>
					<div className='grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2'>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-white uppercase font-squids'>
								Product
							</h2>
							<ul className='text-gray-600'>
								<li className='mb-4'>
									<Link
										to='/'
										className='text-xl font-semibold hover:underline hover:text-white font-qanelas'>
										Home
									</Link>
								</li>
								
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-white uppercase font-squids'>
								Media
							</h2>
							<ul className='text-gray-600'>
								
								<li className='mb-4'>
									<a
										href='https://t.me/RealCoinCasinoCommunity'
										target='_blank'
										rel='noopener noreferrer'
										className='text-xl font-semibold hover:underline hover:text-white font-qanelas'>
										Telegram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='flex items-center justify-between'>
					<span className='text-lg text-gray-600 sm:text-center font-semibold hover:text-white font-squids'>
						The Real Coin Casino
					</span>
					<div className='flex md:mt-4 space-x-6 sm:justify-center sm:mt-0'>
						
						
						<a
							title='telegram'
							href='https://t.me/RealCoinCasinoCommunity'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-gray-400 dark:hover:text-white'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fab'
								data-icon='telegram-plane'
								className='w-10 h-10'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'>
								<path
									fill='currentColor'
									d='M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z'></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
