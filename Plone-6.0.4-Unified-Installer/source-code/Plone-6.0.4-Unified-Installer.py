#############################################################################
#
#    Cybrosys Technologies Pvt. Ltd.
#
#    Copyright (C) 2023-TODAY Cybrosys Technologies(<https://www.cybrosys.com>)
#    Author: Cybrosys Techno Solutions(<https://www.cybrosys.com>)
#
#    You can modify it under the terms of the GNU LESSER
#    GENERAL PUBLIC LICENSE (LGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU LESSER GENERAL PUBLIC LICENSE (LGPL v3) for more details.
#
#    You should have received a copy of the GNU LESSER GENERAL PUBLIC LICENSE
#    (LGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
#############################################################################

import subprocess
import tkinter as tk
from tkinter import messagebox
from tkinter import scrolledtext
import customtkinter as ctk
import os
import datetime
import logging
from PIL import Image
import cairosvg


class App(ctk.CTk):
    width = 750
    height = 450

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Logo Generator
        cairosvg.svg2png("""<?xml version="1.0" encoding="UTF-8"?>
        <svg enable-background="new 0 0 100 
        100" version="1.1" viewBox="0 0 100 100"
         xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <style type="text/css">.st0{fill:#b30000;}
        </style>
        <path class="st0" d="m9.38
         48.41h17.1c0.83-4.41 2.32-8.66 4.42-12.63 3.18-6.27
         7.82-11.68 13.53-15.78 0.96-0.68 1.9-1.29
         2.85-1.84v-7.63c0-2.98-2.41-5.41-5.4-5.41h-0.01-32.49c-2.99
         0-5.41 2.42-5.41 5.41v32.46c0 2.99 2.41 5.41 
         5.41 5.42-0.01 0 0 0 0 0z"/>
        <path class="st0" d="m39.86 48.41h2.01c2.99 0 5.41-2.42
         5.41-5.41v-0.01-14.97c-1.76 2.81-3.23 5.78-4.41 8.87-1.49
          3.7-2.5 7.57-3.01 11.52z"/>
        <path class="st0" d="m25.71
         56.59c0-1.88 0.12-3.77 0.35-5.64h-16.68c-2.99
        0-5.41 2.43-5.41 5.42v35.02c0 2.99 2.42 5.41 5.41
        5.42h35.03c2.98-0.02 5.39-2.43
         5.42-5.42v-9.84c-6.82-0.27-12.48-2.6-16.96-6.97-4.78-4.66-7.17-10.66-7.16-17.99z"/>
        <path class="st0" d="m90.25 53.5h-32.47c-2.99 0-5.41
        2.42-5.42 5.4v0.01 15.15c2.19 0.79 4.5 1.18 6.82 1.15 3.42
        0.06 6.78-0.81 9.75-2.5 3.4-2.11 6.44-4.76 8.99-7.85v5.41c-7.1
         7.28-15.62 11.04-25.56 11.28v9.83c0.02 2.98 2.43 5.39
         5.42 5.42h32.48c2.98-0.02 5.39-2.43
         5.42-5.42v-32.47c-0.01-2.99-2.43-5.41-5.43-5.41z"/>
        <path class="st0" d="m90.25 5.12h-35.02c-2.99 0-5.41 2.42-5.41
         5.41v6.26c3.43-1.73 7.2-2.67 11.05-2.73 4.51 0 8.18 1.35 11.03
         4.06s4.27 6.21 4.26 10.52c0.05 3.68-0.81 7.32-2.49 10.6-0.08 0.16-0.16
         0.33-0.25 0.49 0 0.04-0.05 0.1-0.08 0.14-1.46 2.37-4.56 3.12-6.93
         1.66-1.5-0.92-2.41-2.55-2.41-4.3-0.01-0.97 0.27-1.92 0.81-2.73
         1.4-2.6 2.13-5.5 2.12-8.45
         0-2.59-0.6-4.65-1.79-6.18-1.13-1.49-2.91-2.34-4.78-2.29-2.89
         0-5.98 1.8-9.27 5.4-0.42 0.46-0.85 0.96-1.25 1.45v21.12c0
         2.99-2.42 5.41-5.4 5.42h-0.01-4.78c-0.04 0.68-0.06 1.36-0.06
         2.05 0 6.5 1.84 11.82 5.53 15.98 1.36 1.55 2.96 2.87
         4.74 3.9v-16.5c0-2.99 2.42-5.41 5.41-5.42h35.02c2.99
         0 5.42-2.43 5.42-5.42v-35.03c0-2.99-2.43-5.41-5.42-5.41h-0.04z"/>
        </svg>
        """, write_to='logo.png')
        self.image = Image.open("logo.png")
        logo = ctk.CTkImage(self.image)
        logo_label = ctk.CTkLabel(self, text=" ", image=logo)
        logo_label.place(x=700, y=17, anchor="ne")

        # LogFile Initialization
        self.now = datetime.datetime.now()
        self.current_datetime = self.now.strftime("%Y-%m-%d_%H-%M-%S")
        self.log_filename = f"Plone_{self.current_datetime}.log"
        logging.basicConfig(filename=self.log_filename, level=logging.INFO,
                            format='%(asctime)s - %(levelname)s - %(message)s')
        self.log_path = os.path.abspath(self.log_filename)
        self.pid = None
        self.error_flag = None
        self.title("Plone Installer")
        self.geometry(f"{self.width}x{self.height}")
        self.resizable(False, False)
        self.label = ctk.CTkLabel(self,
                                  text="Copyright © 2023 "
                                       "Cybrosys Technologies."
                                       " All Rights Reserved.",
                                  font=ctk.CTkFont(size=13))
        self.label.place(x=20, y=425, anchor="sw")

        self.welcome_label = ctk.CTkLabel(self,
                                          text="Welcome to Plone 6.0.4 Classic"
                                               " Installer",
                                          font=ctk.CTkFont(size=24))
        self.welcome_label.place(x=20, y=40, anchor="sw")
        self.install_button = ctk.CTkButton(
            self, text="Install",
            font=ctk.CTkFont(size=14),
            width=70,
            height=25,
            command=self.main_next_button_action
        )

        self.install_button.place(x=650, y=400)

        # The directory Path items
        self.directory_main_label = ctk.CTkLabel(self,
                                                 text="Installation Directory",
                                                 font=ctk.CTkFont(size=24))
        self.directory_entry_label = ctk.CTkLabel(self,
                                                  text="Set the installation "
                                                       "directory:",
                                                  font=ctk.CTkFont(size=18))
        self.directory_entry = ctk.CTkEntry(self,
                                            width=450)

        self.directory_next_button = ctk.CTkButton(
            self, text="Next",
            font=ctk.CTkFont(size=14),
            width=70,
            height=25,
            command=self.directory_next_button_action)

        # Administrative password items
        self.admin_pass_main_label = ctk.CTkLabel(self,
                                                  text="Enter System "
                                                       "Administrative "
                                                       "password",
                                                  font=ctk.CTkFont(size=24))
        self.admin_pass_entry = ctk.CTkEntry(
            self, width=450, show="*",
            placeholder_text=f"Enter "
                             "password of"
                             " the "
                             f"user {os.getlogin()}")

        self.admin_pass_next_button = ctk.CTkButton(
            self, text="Next",
            font=ctk.CTkFont(size=14),
            width=70,
            height=25,
            command=self.admin_pass_next_button_action)

        # Plone Admin Password
        self.plone_pass_main_label = ctk.CTkLabel(self,
                                                  text="Set Plone "
                                                       "Administration "
                                                       "Password",
                                                  font=ctk.CTkFont(size=24))
        self.plone_admin_pass_entry = ctk.CTkEntry(self, width=450, show="*",
                                                   placeholder_text="Enter the"
                                                                    " "
                                                                    "password "
                                                                    "for "
                                                                    "your "
                                                                    "plone "
                                                                    "instance")
        self.plone_admin_pass_next_button = ctk.CTkButton(
            self,
            text="Next",
            font=ctk.CTkFont(size=14),
            width=70,
            height=25,
            command=self.final_button_action)

        # Progress Window
        self.scroll_widget = tk.scrolledtext.ScrolledText(self,
                                                          wrap=tk.WORD)
        self.cancel_process_button = ctk.CTkButton(
            self, text="Cancel",
            font=ctk.CTkFont(size=14),
            width=70,
            height=25,
            command=self.cancel_process_action)

        self.message_label = ctk.CTkLabel(
            self,
            text="Please wait while installation is in progress...")

        """Installation Script"""

        self.commands = [
            'sudo apt-get install build-essential -y',
            'sudo apt-get install python-dev-is-python3 -y',
            'sudo apt-get install libjpeg-dev -y',
            'sudo apt-get install libxslt-dev -y',
            'sudo apt-get install python3.9 -y',
            'sudo apt install python3.9-venv -y',
            'python3.9 -m venv .',
            'bin/pip install -r https://dist.plone.org/release/6.0.4'
            '/requirements.txt',
            './bin/buildout',
            './bin/buildout']
        # Success Items
        self.success_main_label = ctk.CTkLabel(
            self,
            text="Plone 6.0.4 "
                 "Classic Successfully "
                 "installed",
            font=ctk.CTkFont(size=24))

        self.log_location = ctk.CTkLabel(self,
                                         text=f"The complete"
                                              f" log file "
                                              f"will be "
                                              f"saved in-: \n {self.log_path}",
                                         font=ctk.CTkFont(size=14),
                                         justify="left")

        self.success_done_button = ctk.CTkButton(
            self, text="Done",
            font=ctk.CTkFont(size=14),
            width=70,
            height=25,
            command=self.cancel_process_action)

    def main_next_button_action(self):
        # unload the main frame items
        self.install_button.place_forget()
        self.welcome_label.place_forget()

        # Directory Items Loaded
        self.directory_main_label.place(x=20, y=40, anchor="sw")
        self.directory_entry.place(x=20, y=40, anchor="sw")
        self.directory_entry.grid(row=0, column=0, padx=10,
                                  pady=10)
        self.directory_entry_label.place(relx=0.5, rely=0.4, anchor="center")
        self.directory_entry.place(relx=0.5, rely=0.5,
                                   anchor="center")

        # insert current directory into widget
        current_dir = os.getcwd()
        self.directory_entry.insert(0, current_dir)

        self.directory_next_button.place(x=650, y=400)

    def directory_next_button_action(self):
        directory_path = self.directory_entry.get()
        if " " in directory_path:
            messagebox.showwarning("Warning", f"The Path "
                                              f"{self.directory_entry.get()}"
                                              f" Spaces in between directory "
                                              f"names might occur error in "
                                              f"buildout process , please "
                                              f"remove the spaces if any")
        if os.path.exists(directory_path):
            messagebox.showwarning("Warning", f"The Path "
                                              f"{self.directory_entry.get()}"
                                              f" already exists")
        else:
            os.makedirs(self.directory_entry.get())

            # The directory items unloaded
            self.directory_main_label.place_forget()
            self.directory_entry.place_forget()
            self.directory_entry_label.place_forget()
            self.directory_next_button.place_forget()

            # The Administrative Password items loaded
            self.admin_pass_main_label.place(x=20, y=40, anchor="sw")

            self.admin_pass_entry.place(relx=0.5, rely=0.5,
                                        anchor="center")

            self.admin_pass_next_button.place(x=650, y=400)

    def admin_pass_next_button_action(self):

        # The Administrative password items unloaded
        self.admin_pass_main_label.place_forget()
        self.admin_pass_entry.place_forget()
        self.admin_pass_next_button.place_forget()

        # The Administrative Password items unloaded
        self.plone_pass_main_label.place(x=20, y=40, anchor="sw")
        self.plone_admin_pass_entry.place(relx=0.5, rely=0.5,
                                          anchor="center")
        self.plone_admin_pass_next_button.place(x=650, y=400)

    def cancel_process_action(self):
        self.pid = os.getpid()
        os.kill(self.pid, 9)

    def final_button_action(self):
        """Installation Process"""
        plone_admin_pass = self.plone_admin_pass_entry.get()
        admin_pass = self.admin_pass_entry.get()
        if plone_admin_pass:
            # Unload all items
            self.plone_pass_main_label.place_forget()
            self.plone_admin_pass_entry.place_forget()
            self.plone_admin_pass_next_button.place_forget()
            self.label.place_forget()
            # The progress Window Loaded
            self.scroll_widget.place(relx=0.5, rely=0.45, anchor=tk.CENTER,
                                     width=700,
                                     height=400)
            self.scroll_widget.insert(tk.END, "We kindly request "
                                              "your patience during "
                                              "the installation process,"
                                              " which may take between"
                                              " 10-25 minutes, depending "
                                              "on your network speed. \n ")

            self.cancel_process_button.place(relx=0.96, rely=0.96,
                                             anchor=tk.SE)
            self.message_label.place(x=10, y=420)

            # INSTALLATION PROCESS
            os.chdir(self.directory_entry.get())

            # CREATE BUILDOUT.CFG FILE(FOR INSTALLATION)
            with open("buildout.cfg", "w") as f:
                f.write(f'''[buildout]
extends = http://dist.plone.org/release/6.0.4/versions.cfg
parts = instance
[instance]
recipe = plone.recipe.zope2instance
eggs =
    Plone
user = admin:{plone_admin_pass}''')
                if os.path.isfile("buildout.cfg"):
                    self.scroll_widget.insert(tk.END, "Buildout "
                                                      "file created \n")
                else:
                    messagebox.showerror("Error",
                                         f"An unexpected error has occurred."
                                         f" Please check the log"
                                         f" file at:\n\n{self.log_path}")
            # Execute the commands
            self.error_flag = False  # Error Handling
            for cmd in self.commands:
                # Update message label with current command being executed
                self.message_label.configure(text=f"Executing command: {cmd}")
                # Write the commands to log file
                self.update()
                if cmd == "./bin/buildout":
                    # Run the buildout command
                    process = subprocess.Popen('./bin/buildout',
                                               stdout=subprocess.PIPE,
                                               stderr=subprocess.PIPE,
                                               universal_newlines=True)

                    # Print output in real-time and write it to the log file
                    for stdout_line in iter(process.stdout.readline, ''):
                        logging.info(stdout_line)
                        self.scroll_widget.insert(tk.END, stdout_line)
                        self.scroll_widget.yview(tk.END)
                        self.update()

                    for stderr_line in iter(process.stderr.readline, ''):
                        logging.error(stderr_line)

                elif cmd.startswith("sudo"):
                    cmd = cmd.split()
                    cmd.insert(1,
                               "-S")
                    cmd = " ".join(cmd)
                    cmd_password = admin_pass + "\n"
                    process = subprocess.run(cmd.split(), capture_output=True,
                                             text=True,
                                             input=cmd_password)
                    if "incorrect password attempt" in process.stderr:
                        messagebox.showerror("Error",
                                             "The Administrator password is "
                                             "incorrect!")
                        logging.info("Password Incorrect")

                        pid = os.getpid()
                        os.kill(pid, 9)

                    output_with_sudo = \
                        process.stdout.strip() + "\n" + process.stderr.strip()
                    logging.info(output_with_sudo)

                    self.scroll_widget.insert(tk.END, output_with_sudo)
                    self.scroll_widget.insert(tk.END, "\n\n")
                    self.scroll_widget.yview(tk.END)
                    self.update()
                    if process.returncode != 0:
                        messagebox.showerror("Error",
                                             f"An unexpected "
                                             f"error has occurred."
                                             f" Please check"
                                             f" the log "
                                             f"file at:\n\n{self.log_path}")
                        pid = os.getpid()
                        os.kill(pid, 9)
                        self.error_flag = True
                else:
                    process = subprocess.run(cmd.split(), capture_output=True,
                                             text=True)

                    # Display command output in Text widget
                    output_without_sudo = \
                        process.stdout.strip() + "\n" + process.stderr.strip()
                    self.scroll_widget.insert(tk.END, output_without_sudo)
                    self.scroll_widget.insert(tk.END, "\n\n")
                    self.scroll_widget.yview(tk.END)
                    self.update()
                    if process.returncode != 0:
                        messagebox.showerror("Error",
                                             f"An unexpected error "
                                             f"has occurred."
                                             f" Please check the log "
                                             f"file at:\n\n{self.log_path}")
                        pid = os.getpid()
                        os.kill(pid, 9)
                        self.error_flag = True
            if self.error_flag:
                """Error Box"""
                self.withdraw()
                messagebox.showerror("Error",
                                     f"An unexpected error has occurred."
                                     f" Please check the "
                                     f"log file at:\n\n{self.log_path}")
                pid = os.getpid()
                os.kill(pid, 9)
            else:
                # unloaded the progress window items
                self.scroll_widget.place_forget()
                self.cancel_process_button.place_forget()
                self.message_label.place_forget()

                # load the Completed window items
                commands_text = ctk.CTkLabel(
                    self,
                    text=f"To run the the instance"
                         f" go to '{os.getcwd()}' \n \n"
                         f"and open a terminal and"
                         f" enter the command:  "
                         f"./bin/buildout \n"
                         f"To ensure "
                         f"that all dependencies are "
                         f"installed \n"
                         f"Note the Commands "
                         f"below and run "
                         f"the Plone Instance \n"
                         f"./bin/instance start \n"
                         f"./bin/instance stop (To stop "
                         f"the instance) \n"
                         f"./bin/instance fg (Used for "
                         f"development purposes) \n",
                    font=ctk.CTkFont(size=14),
                    justify="left")
                self.success_main_label.place(x=20, y=40, anchor="sw")
                commands_text.place(x=20, y=220, anchor="sw")
                self.log_location.place(x=20, y=375, anchor="sw")
                self.label.place(x=20, y=425, anchor="sw")
                self.success_done_button.place(x=650, y=400)


if __name__ == "__main__":
    app = App()
    app.mainloop()
