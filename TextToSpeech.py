import requests

headers = {
    'apikey': '',
}

data = {
  'speaker_id': '3',
  'input': 'nothing'
} 
data['input'] = 'vô lí'

response = requests.post('https://api.zalo.ai/v1/tts/synthesize', headers=headers, data=data)
print(response.text)
