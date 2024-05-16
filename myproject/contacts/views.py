from django.shortcuts import render
from .models import Contacts

# Create your views here.

def contact_list(request):
    contacts = Contacts.objects.all()
    return render(request, 'contacts/contact_list.html', {'contacts': contacts})


def add_contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        phone_number = request.POST['phone_number']
        Contacts.objects.create(name=name, email=email, phone_number=phone_number)
        return redirect('contact_list')
    return render(request, 'contacts/add_contact.html')

def delete_contact(request, contact_id):
    contact = Contacts.objects.get(id=contact_id)
    contact.delete()
    return redirect('contact_list')