# -*- coding: utf-8 -*-
"""Installer for the cybro.horizon.red package."""

from setuptools import find_packages
from setuptools import setup

long_description = "\n\n".join(
    [
        open("README.rst").read(),
        open("CONTRIBUTORS.rst").read(),
        open("CHANGES.rst").read(),
    ]
)

version = "1.0.0"
setup(
    name="cybro.horizon.red",
    version=version,
    description="A Plone backend theme with a color scheme of red would convey a sense of energy, urgency, and power. The dominant shade of red could be a bright or deep hue, depending on the desired level of intensity.",
    long_description=long_description,
    # Get more from https://pypi.org/classifiers/
    classifiers=[
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: Addon",
        "Framework :: Plone :: 5.2",
        "Framework :: Plone :: 6.0",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: GNU General Public License v2 (GPLv2)",
    ],
    keywords="Python Plone CMS",
    author="midhlaj-nk",
    author_email="midhlaj.nk@gmail.com",
    url="https://github.com/collective/cybro.horizon.red",
    project_urls={
        "PyPI": "https://pypi.python.org/pypi/cybro.horizon.red",
        "Source": "https://github.com/collective/cybro.horizon.red",
        "Tracker": "https://github.com/collective/cybro.horizon.red/issues",
        # 'Documentation': 'https://cybro.horizon.red.readthedocs.io/en/latest/',
    },
    license="GPL version 2",
    packages=find_packages("src", exclude=["ez_setup"]),
    namespace_packages=["cybro", "cybro.horizon"],
    package_dir={"": "src"},
    include_package_data=True,
    zip_safe=False,
    python_requires=">=3.7",
    install_requires=[
        "setuptools",
        # -*- Extra requirements: -*-
        "z3c.jbot",
        "plone.api>=1.8.4",
        "plone.app.dexterity",
    ],
    extras_require={
        "test": [
            "plone.app.testing",
            # Plone KGS does not use this version, because it would break
            # Remove if your package shall be part of coredev.
            # plone_coredev tests as of 2016-04-01.
            "plone.testing>=5.0.0",
            "plone.app.contenttypes",
            "plone.app.robotframework[debug]",
        ],
    },
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    [console_scripts]
    update_locale = cybro.horizon.red.locales.update:update_locale
    """,
)
