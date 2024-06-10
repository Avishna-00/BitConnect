import React, {Fragment} from 'react';
import {Dialog, Listbox, Transition} from "@headlessui/react";
import {SecondaryButton, SuccessButton} from "../Button";

const CreateEmpAccModal = (props) => {
	const {open, setOpen, firstName, setFirstName, lastName, setLastName, empEmail, setEmpEmail, empRole, setEmpRole, empTeam, setEmpTeam, joinedDate, setJoinedDate, createAccount} = props;

	const emptyFirstName = firstName.trim() === "";
	const emptyLastName = lastName.trim() === "";
	const emptyEmail = empEmail.trim() === "";
	// need to learn how Role and Team applicable here



	return(
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel
								className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl
								transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
							>

								{/*Modal body start*/}
								<div className=" sm:items-center mb-4 border-red-500">
										<div className="sm:flex-auto">
											<h1 className="text-base font-semibold leading-6 text-gray-900">Create an User Account</h1>
											<p className="mt-1 mb-5 text-sm text-gray-700">
												Enter relevant details of new employee.
											</p>
										</div>

									<div className="flex sm:flex-row flex-col gap-4 items-center justify-between mt-3">
										<div className="w-full">
											<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
												First Name
											</label>
											<div className="mt-1">
												<input
													type="text"
													name="firstname"
													id="fname"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
													ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
													sm:text-sm sm:leading-6"
													value={firstName}
												/>
											</div>
										</div>
										<div className="w-full">
											<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
												Last Name
											</label>
											<div className="mt-1">
												<input
													type="text"
													name="lastname"
													id="lname"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
													ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
													sm:text-sm sm:leading-6"
													value={lastName}
												/>
											</div>
										</div>
									</div>

									<div className="w-full mt-3">
										<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
											Email
										</label>
										<div className="mt-1">
											<input
												type="email"
												name="email"
												id="email"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                        sm:text-sm sm:leading-6"
												value={empEmail}
											/>
										</div>
									</div>

									<div className="flex sm:flex-row flex-col gap-4 items-center justify-between mt-3">
										<div className="w-full">
											<label htmlFor="team" className="block text-sm font-medium leading-6 text-gray-900">
												Team
											</label>
											<div className="mt-1">
												<select
													name="team"
													id="team"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
      											ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
      											sm:text-sm sm:leading-6"
													value={empTeam}
													onChange={(e) => setEmpTeam(e.target.value)}
												>
													<option value="Team A">Team A</option>
													<option value="Team B">Team B</option>
													<option value="Team C">Team C</option>
												</select>
											</div>
										</div>
										<div className="w-full">
											<label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
												Role
											</label>
											<div className="mt-1">
												<select
													name="role"
													id="role"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
															ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
															sm:text-sm sm:leading-6"
													value={empRole}
													onChange={(e) => setEmpRole(e.target.value)}
												>
													<option value="BA">BA</option>
													<option value="SE">SE</option>
													<option value="QA">QA</option>
													<option value="Team Lead">Team Lead</option>
												</select>
											</div>
										</div>
									</div>

									<div className="w-full mt-3">
										<label htmlFor="joined-date" className="block text-sm font-medium leading-6 text-gray-900">
											Joined On
										</label>
										<div className="mt-1">
											<input
												type="date"
												name="joinedDate"
												id="joinedDate"
												autoComplete="to"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
											ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
											sm:text-sm sm:leading-6"
												value={joinedDate}
											/>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center justify-between px-4 mt-6">
									<SecondaryButton
										label={'Cancel'}
										onClick={() => {
											setOpen(false);
										}}
									/>
									<SuccessButton label={'Create'}/>
									{/*<SuccessButton label={'Generate'} onClick={generateReport} disabled={!noErrors}/>*/}
								</div>
								{/*Modal body end*/}

							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);

};
export default CreateEmpAccModal;