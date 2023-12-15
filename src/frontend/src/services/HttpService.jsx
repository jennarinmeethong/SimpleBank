export const HttpService = {
    Post: async (url, requestData) => {
        try {
            var response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            return await response.json()
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
}