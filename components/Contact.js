export const Contact = () => {
	return (
		<section className='bg-purple-100'>
			<div className='bg-white p-6 rounded-lg'>
				<div className=' self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
					Contact Me
				</div>
				<p className='text-center text-xs text-gray-300'>
					Send me a message if you are interested in working with me!
				</p>
				<div className='mt-8'>
					<form action='#' autoComplete='off'>
						<div className='flex flex-col mb-2'>
							<label
								className='relative block p-3 border-2 border-gray-200 rounded-lg'
								htmlFor='name'
							>
								<span
									className='text-xs font-medium text-gray-500'
									htmlFor='name'
								>
									Name
								</span>

								<input
									className='w-full p-0 text-sm border-none focus:ring-0'
									id='name'
									type='text'
									autoComplete='given-name'
									placeholder='John Doe'
								/>
							</label>
						</div>
						<div className='flex flex-col mb-2'>
							<label
								className='relative block p-3 border-2 border-gray-200 rounded-lg'
								htmlFor='name'
							>
								<span
									className='text-xs font-medium text-gray-500'
									htmlFor='name'
								>
									Email
								</span>

								<input
									className='w-full p-0 text-sm border-none focus:ring-0'
									id='name'
									type='email'
									placeholder='j.doe@email.com'
								/>
							</label>
						</div>
						<div className='flex flex-col mb-6'>
							<label
								className='relative block p-3 border-2 border-gray-200 rounded-lg'
								htmlFor='name'
							>
								<span
									className='text-xs font-medium text-gray-500'
									htmlFor='name'
								>
									Message
								</span>

								<textarea
									className='w-full p-0 text-sm border-none focus:ring-0'
									id='message'
									placeholder='Enter your message'
								/>
							</label>
						</div>

						<div className='flex w-full mb-3'>
							<button
								type='submit'
								className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
							>
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
