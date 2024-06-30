import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
    <header>
        <div className="header-main">
            <div className="header-logo">
                <a href="index.html" className="ajax"><img src="./images/logo.svg" width="137" height="31" alt=""/></a>
            </div>
            <div className="header-nav-buttons">
                <div className="nav-button vis-m"><span></span><span></span><span></span></div>
            </div>
            <div className="header-nav-container">
                <nav>
                    <ul>
                        <li>
                            <a href="tovary.html" className="">Оборудование</a>
                          
                            <ul>
                                <li><a href="henkelman.html" className="ajax custom-scroll-link">Упаковочные машины</a></li>
                                <li><a href="kolbe.html" className="ajax custom-scroll-link">Пилы и мясорубки</a></li>
                                <li><a href="kerres.html" className="ajax custom-scroll-link">Коптильные шкафы</a></li>
                                <li><a href="biovator.html" className="ajax custom-scroll-link">Компостеры</a></li>
                                <li><a href="Italianpack.html" className="ajax custom-scroll-link">Трейсилеры</a></li>
                                <li><a href="graef.html" className="ajax custom-scroll-link">Оборудование для нарезки</a></li>
        
                            </ul>
                        </li>
                        <li>
                            <a href="uslugy.html" className="">Услуги</a>
                             
                            <ul>
                                <li><a href="postavka.html" className="ajax custom-scroll-link">Поставка обоудования</a></li>
                                <li><a href="montaj.html" className="ajax custom-scroll-link">Монтаж оборудования</a></li>
                                <li><a href="remont.html" className="ajax custom-scroll-link">Ремонт оборудования</a></li>
                                <li><a href="produktsia.html" className="ajax custom-scroll-link">Поиск поставщиков</a></li>
                            
                            </ul>
                        </li>
                        <li>
                                <a href="/ru/plenky.html" className="">Материалы</a>
                                
                                <ul>
                                    <li><a href="termo.html" className="ajax custom-scroll-link">Термоусадочная пленка</a></li>
                                    <li><a href="vacuum.html" className="ajax custom-scroll-link">Вакуумная пленка</a></li>
                                    <li><a href="flowpack.html" className="ajax custom-scroll-link">Пленка FlowPack</a></li>
                                    <li><a href="kishka.html" className="ajax custom-scroll-link">Свиная кишка</a></li>
                                    <li><a href="noji.html" className="ajax custom-scroll-link">Ножи для куттера</a></li>
                                    <li><a href="matrix.html" className="ajax custom-scroll-link">Смазочные материалы</a></li>
                                    <li><a href="spetsii.html" className="ajax custom-scroll-link">Специи</a></li>
                                </ul>
                            </li>
                        <li><a href="kontakty.html" className="">Контакты</a></li>
                        <li><a href="kontakty.html" className="">+373 (68) 68-44-16</a></li>
        
                            <button className="buttony"><a href="index.html" >ru 🇷🇺</a></button>
                            <button className="buttony"><a href="/en/index.html" >en 🇺🇸</a></button>
                            <button className="buttony"><a href="/ro/index.html" >ro 🇷🇴</a></button>
                    </ul>
                </nav>
            </div>
        </div>
        </header>
        )
};