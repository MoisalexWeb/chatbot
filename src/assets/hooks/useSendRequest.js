// https://rapidapi.com/airaudoeduardo/api/chat-gtp-free/pricing

import { useEffect, useState } from "react";

const useSendRequest = () => {

	const sendRequest = async (userMessage) => {
		if (!userMessage) return

		try {
			const url = 'https://chat-gtp-free.p.rapidapi.com/v1/chat/completions';
			const options = {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'X-RapidAPI-Key': '5f6217efb6mshd5fa0005dd0e2ddp10ff1bjsnd0ba7b543a98',
					'X-RapidAPI-Host': 'chat-gtp-free.p.rapidapi.com'
				},
				body: JSON.stringify({
					chatId: '92d97036-3e25-442b-9a25-096ab45b0525',
					messages: [
						{
							role: 'user',
							content: userMessage
						}
					]
				})
			};

			const response = await fetch(url, options)
			const result = await response.json();
			// console.log(result);
			return result

		} catch (error) {
			console.log(error);
		}

	}

	return {
		sendRequest
	}

}


export default useSendRequest