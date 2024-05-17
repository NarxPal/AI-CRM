from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from contacts.models import Contacts

# Create your views here.

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username', '')
        email = data.get('email', '')
        password = data.get('password', '')
        if not username or  not email or not password:
            return JsonResponse({'error': 'All fields are required'}, status=400)
        if User.objects.filter(email = email).exists():
            return JsonResponse({'error': 'email already exists'}, status=400)
        user = User.objects.create_user(username = username, email=email, password=password)
        user.save()
        return JsonResponse({'message': 'User created successfully'}, status=201)
    return JsonResponse({'error': 'Method not allowed'}, status=405)

def contact_list(request):
    contacts = Contacts.objects.all()
    return render(request, 'Contacts/contact_list.html', {'contacts': contacts})


def add_contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        phone_number = request.POST['phone_number']
        Contacts.objects.create(name=name, email=email, phone_number=phone_number)
        return redirect('contact_list')
    return render(request, 'Contacts/add_contact.html')

def delete_contact(request, contact_id):
    contact = Contacts.objects.get(id=contact_id)
    contact.delete()
    return redirect('contact_list')